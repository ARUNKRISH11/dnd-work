import React from 'react'

function TalkToUs() {
  return (
    <div className="talk_to_us">
      <p className="heading_white">TALK TO US</p>
      <div className="talk_image">
      </div>
      <div className="talk_form">
        <div className="form">
          <form action="">
            <input type="text" className="form_name" name="name" placeholder='Name'/> <br />
            <input type="email" className="form_email" name="email" placeholder='Email' /> 
            <input type="tel" className="form_mobile" name="mobile" placeholder='Mobile'/> <br />
            <input type='text' className="form_tell_us" name="tell_us" placeholder='Tell us...'></input> <br />
            <button type="submit" className='send_btn' value="Submit" >Send </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TalkToUs