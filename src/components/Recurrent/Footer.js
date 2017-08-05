import React from 'react'
// import { StickyContainer, Sticky } from 'react-sticky'

const Footer = () => (
  <footer className='page-footer'style={footerStyles}>
    <div className='row'>
      <div className='col 14 offset-12 s12' style={{textAlign: 'center'}}>
        <p className='white-text'>Created By:</p>
        <p className='white-text'>David Lassiter + Eric King + Juan Carlos Molina + Tim Anderson</p>
      </div>
    </div>
    <div className='footer-copyright' style={{textAlign: 'center'}}>
      <div className='container'>© 2017 UNCC Coding Bootcamp - Team Erlang</div>
    </div>
  </footer>
//   <StickyContainer>
//   <Sticky bottomOffset={80}>
//     {
//       ({
//         style,
//         isSticky
//       }) => {
//         return (
//           <footer className='page-footer'style={style}>
//             <div className='row'>
//               <div className='col 14 offset-12 s12' style={{textAlign: 'center'}}>
//                 <p className='white-text'>Created By:</p>
//                 <p className='white-text'>David Lassiter + Eric King +
//                   Juan Carlos Molina + Tim Anderson</p>
//               </div>
//             </div>
//             <div className='footer-copyright' style={{textAlign: 'center'}}>
//               <div className='container'>© 2017 UNCC Coding Bootcamp - Team Erlang</div>
//             </div>
//           </footer>
//         )
//       }
//     }
//   </Sticky>
// </StickyContainer>
)

const footerStyles = {
  backgroundColor: '#172b4c',
  fontFamily: 'Share Tech Mono'
}

export default Footer
