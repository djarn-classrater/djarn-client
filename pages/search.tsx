import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Search from '../components/Search'
import { gql } from 'apollo-boost'
import { useLazyQuery } from '@apollo/react-hooks'
import { Query } from 'react-apollo'
import { CourseType, UserType } from '~/generated/graphql'

const GET_COURSE = gql`
  query getCourse($courseId: String!) {
    course(courseId: $courseId) {
      courseId
      courseName
    }
  }
`

const STUDENT_INFO = gql`
  query getStudentInfo {
    me {
      firstNameTH
      lastNameTH
      organizationNameTH
    }
  }
`

const SearchResultContainer = styled.div`
  border-radius: 16px;
  padding: 0 2rem;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }
`

const Line = styled.ul`
  margin: 0;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #f5f5f5;
`

const Text = styled.p`
  margin: 0;
  padding: 1rem 0;
`

const SearchResult: FunctionComponent<Partial<CourseType>> = ({
  courseId,
  courseName,
}) => {
  return (
    <Link href={{ pathname: 'course', query: { courseId } }}>
      <SearchResultContainer>
        <Text>
          {courseId} {courseName}
        </Text>
        <Line />
      </SearchResultContainer>
    </Link>
  )
}

const UserInfo = () => {
  return (
    <Query<{ me: UserType }> query={STUDENT_INFO}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>{error.message}</p>

        const { me } = data
        return <p>{`${me.firstNameTH} ${me.lastNameTH}`}</p>
      }}
    </Query>
  )
}

const SearchBar = () => {
  const [getCourse, { loading, error, data }] = useLazyQuery<{
    course: CourseType
  }>(GET_COURSE)

  return (
    <Layout>
      <Search
        onChange={event =>
          getCourse({
            variables: {
              courseId: event.target.value,
            },
          })
        }
      />
      <div>
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          error.message
        ) : (
          data && <SearchResult {...data.course} />
        )}
      </div>
      <div>{!loading && !error && !data && <UserInfo />}</div>
    </Layout>
  )
}

export default SearchBar
