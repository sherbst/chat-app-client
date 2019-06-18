import React from 'react';
import ReactTimeAgo from 'react-time-ago/tooltip'

export default function SentTime ({ date }) {
    return (
        <span className="sent-time"><ReactTimeAgo date={date} /></span>
    )
}