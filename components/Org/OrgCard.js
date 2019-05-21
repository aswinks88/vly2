import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const OrgCard = ({ org, ...props }) => (
  <div>
    <Link href={`/orgs/${org._id}`}><a target='_blank'>
      <div className='requestContainer'>
        <img className='requestImg' src={org.imgUrl} />
        <p className='requestTitle'>{org.name}</p>
        <p className='requestDateTime'>{org.type}</p>
        <p className='requestDescription'>{org.about}</p>
      </div></a>
    </Link>
    <style jsx>{`
      .requestContainer {
        width: 18.5rem;
        letter-spacing: -0.3px;
        line-height: 24px;
        margin-bottom: 0px;
      }

      .requestImg {
        width: 100%;
        height: 10rem;
        background-color: black;
        object-fit: cover;
        object-position: center;
      }

      .requestTitle {
        margin-top: 0px;
        margin-bottom: 0px;
        vertical-align: middle;
        font-weight: bold;
        font-size: 16px;
        color: #000;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }




      .requestDateTime {
        vertical-align: middle;
        margin-bottom: 0px;
        font-weight: bold;
        font-size: 16px;
        color: #585858;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .requestDescription {
        vertical-align: top;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .requestTitle :hover {
        color: #6549AA;
      }

      @media screen and (max-width: 768px) {
        .requestContainer {
          width: calc(100vw - 2rem);
          margin-bottom: 1.5rem;
        }
        .requestImg {
          height: 12rem;
        }
      }
    `}</style>
  </div>
)

OrgCard.propTypes = {
  org: PropTypes.shape({
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    type: PropTypes.arrayOf(
      PropTypes.oneOf(['admin', 'op', 'vp', 'ap', 'other'])
    ).isRequired,
    _id: PropTypes.string.isRequired
  }).isRequired
}

export default OrgCard
