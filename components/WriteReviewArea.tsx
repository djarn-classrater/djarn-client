import React, { forwardRef } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  height: string
}

const WriteReview = forwardRef<HTMLTextAreaElement, Props>(
  ({ height, ...props }, ref) => {
    return (
      <form>
        <textarea
          {...props}
          ref={ref}
          placeholder="write your review..."
          style={{
            margin: 'auto',
            color: '#909090',
            fontWeight: 300,
            border: '#FFFFFF',
            textAlign: 'left',
            fontSize: '1rem',
            width: '100%',
            height: `${height}`,
            wordBreak: 'break-all',
            borderRadius: '0.9375rem',
            background: '#F8F8F8',
            opacity: 1,
            boxSizing: 'border-box',
            padding: '1rem',
            marginBottom: '2rem',
          }}
        ></textarea>
      </form>
    )
  },
)

WriteReview.displayName = 'WriteReviewArea'

export default WriteReview
