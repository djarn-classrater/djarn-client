import React, { FunctionComponent, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Search from '../components/Search'
import { gql } from 'apollo-boost'
import { useLazyQuery } from '@apollo/react-hooks'
import { Query } from 'react-apollo'
import { CourseType, UserType, CourseResponse } from '~/generated/graphql'

const SEARCH_COURSE = gql`
  query searchCourse($query: String!) {
    search(query: $query, size: 5) {
      _id
      course {
        courseId
        courseName
      }
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
  margin-bottom: 1rem;
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
const User = styled.p`
  padding: 0;
  margin: 0;
`
const UserArea = styled.div`
  margin: 2rem 1rem;
  border-left: 0.125rem solid;
  padding: 0 1rem;
  color: #747070;
`
const WarningArea = styled.div`
  background-color: #faecbd;
  border-left: 1rem solid #eda214;
`
const TextWarning = styled.p`
  padding: 1rem;
  margin: 0;
  color: #eda214;
  font-size: 0.75rem;
`
const Texts = styled.p`
  color: #9d9797;
`

const TextArea = styled.div`
  text-align: center;
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
        return (
          <UserArea>
            <User>{`${me.firstNameTH} ${me.lastNameTH}`}</User>
            <User>{`${me.organizationNameTH}`}</User>
          </UserArea>
        )
      }}
    </Query>
  )
}

const Warning = () => {
  return (
    <WarningArea>
      <TextWarning>
        กำลังใช้ระบบแบบ Beta
        ซึ่งทำให้ผู้ใช้สามารถค้นหากระบวนวิชาโดยใช้รหัสวิชาเท่านั้น
      </TextWarning>
    </WarningArea>
  )
}
const SearchBar = () => {
  const [searchCourse, { loading, data }] = useLazyQuery<{
    search: CourseResponse[]
  }>(SEARCH_COURSE)
  const [searchActive, setSearchActive] = useState<boolean>(false)
  return (
    <Layout>
      <Search
        onChange={event =>
          searchCourse({
            variables: {
              query: event.target.value,
            },
          })
        }
        onCancelClick={() => {
          setSearchActive(false)
        }}
        onSearchClick={() => {
          setSearchActive(true)
        }}
      />
      <div>
        {searchActive ? (
          <>
            {loading ? (
              <TextArea>
                <Texts>loading...</Texts>
              </TextArea>
            ) : (
              data &&
              data.search.map((courseRes, idx) => (
                <SearchResult key={idx} {...courseRes.course} />
              ))
            )}
            <Warning />
          </>
        ) : (
          <UserInfo />
        )}
      </div>
    </Layout>
  )
}

export default SearchBar
