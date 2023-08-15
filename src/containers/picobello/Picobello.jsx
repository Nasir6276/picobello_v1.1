import React, {useState} from 'react'
import './picobello.css'

import Rectangle12 from '../../img/Rectangle 12.png'

const Picobello = () => {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className="picobello">
      <div className="picobello_image">
        <img src={Rectangle12} alt="picobello" />
      </div>
      <div className="picobello_expandables">
        <h1>Why Choose Us</h1>
        {data.map((item, i) => (
          <div className="picobello_item">
            <div className="picobello_title" onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <hr />
            <div className={selected === i ? 'picobello_show' : 'picobello_comment'}>
              <p>{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const data = [
  {
    title: 'Expertise & Experience',
    comment: 'With years of industry experience, our team brings a wealth of knowledge and expertise to every project.'
  },
  {
    title: 'Collaboration',
    comment: 'With years of industry experience, our team brings a wealth of knowledge and expertise to every project.'
  },
  {
    title: 'Innovation',
    comment: 'With years of industry experience, our team brings a wealth of knowledge and expertise to every project.'
  },
  {
    title: 'Attention to Detail',
    comment: 'With years of industry experience, our team brings a wealth of knowledge and expertise to every project.'
  },
  {
    title: 'Client Satisfaction',
    comment: 'With years of industry experience, our team brings a wealth of knowledge and expertise to every project.'
  },
]

export default Picobello