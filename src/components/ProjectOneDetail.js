import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectOneDetail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState({});
console.log(detail)
    useEffect(() => {
        const url = `https://gentle-crag-55338.herokuapp.com/project/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))

    }, [])
    return (
        <div key={detail.id} className='flex flex-col items-center text-center bg-tertiary'>
            <div className='mb-8 grid grid-cols-1 md:grid-cols-3 gap-5 px-10 mt-10'>
                <div>
                    <img className='rounded-2xl' src={detail.imgOne} alt='' />
                </div>
                <div>
                    <img className='rounded-2xl' src={detail.imgTwo} alt='' />
                </div>
                <div>
                    <img className='rounded-2xl' src={detail.imgThree} alt='' />
                </div>



            </div>
            <div>
                <p className='capitalize text-accent text-sm mb-3'>{detail.category}</p>
                <h3 className='text-2xl font-semibold capitalize mb-3'>{detail.name}</h3>
                <p className='text-base max-w-md'>
                  Detail:  {detail.details}
                </p>
            </div>

            <a className='btn btn-accent' target="_blank" href={detail.live}> LiveSite</a>
            <a className='btn btn-accent' target="_blank" href={detail.git}> Github</a>
        </div>
    );
};

export default ProjectOneDetail;