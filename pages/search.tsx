import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Search from '../components/Search'
import { gql } from 'apollo-boost'
import { useLazyQuery } from '@apollo/react-hooks'
import { CourseType } from '~/generated/graphql'

const GET_COURSE = gql`
  query getCourse($courseId: String!) {
    course(courseId: $courseId) {
      courseId
      courseName
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
    </Layout>
  )
}

export default SearchBar
