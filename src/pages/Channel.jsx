import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';

import { SiYoutubemusic } from 'react-icons/si'
import { BiCommentDetail } from 'react-icons/bi'
import { AiOutlineLike } from 'react-icons/ai'

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const Channel = () => {
    
    const { channelId } = useParams();
    const [ channelDetail, setChannelDetail ] = useState();
    const [ videos, setVideo ] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}&order=date`);
                setChannelDetail(data.items[0])

            } catch(error){
                console.log("Error fetching data" , error);
            }
        }

        fetchResults();
    }, [channelId])

    useEffect(() => {
        fetchFromAPI(`search?type=video&part=snippet&q=${channelId}`)
            .then((data) => setVideo(data.items));
    }, [channelId]);

    return (
        <section id='channel'>
            {channelDetail && (
                <div className='channel__inner'>
                    <div className='channel__header' style={{ backgroundImage : `url(${channelDetail.brandingSettings.image.bannerExternalUrl})`}}>
                        <div className='circle'>
                            <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                        </div>
                    </div>
                    <div className='channel__info'>
                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                        <p className='desc'>{channelDetail.snippet.description}</p>
                        <div className="info">
                            <span><SiYoutubemusic />{channelDetail.statistics.subscriberCount}</span>
                            <span><AiOutlineLike />{channelDetail.statistics.videoCount}</span>
                            <span><BiCommentDetail />{channelDetail.statistics.viewCount}</span>
                        </div>
                    </div>
                    <div className='channel__video video__inner'>
                        <h3>채널 비디오</h3>
                        {videos.map((video, key) => (
                            <div className='video' key={key}>
                                <div className='video__thumb play__icon'>
                                    <Link 
                                        to={`/video/${video.id.videoId}`}
                                        style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}
                                    >
                                    </Link>
                                </div>
                                <div className='video__info'>
                                    <div className='title'>
                                        <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                                    </div>
                                    <p className="desc">
                                        {video.snippet.description}
                                    </p>
                                    <div className='info'>
                                        <Link to={`/channel/${video.snippet.channelId}`} className='author'>{video.snippet.channelTitle}</Link>
                                        <span className='date'>{formatDate(video.snippet.publishedAt)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='channel__more'></div>
                </div>
            )}
        </section>
    )
}

export default Channel