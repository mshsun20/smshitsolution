import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  // console.log(props.acc)
  const acdtl = props.acc
  
  const pgld = () => {
    const activePg = window.location.pathname
    document.querySelectorAll('.nv').forEach(lnk => {
      if (lnk.href.includes(`${activePg}`)) {
        // console.log(lnk.href)
        lnk.classList.add('actv')
      }
      else {
        lnk.classList.remove('actv')
      }
    })
    // console.log(navLnks)
  }
  useEffect(() => {
    pgld()
  }, [])

  return (
    <>
      <div className="navmenu">
        <div className="menulist">
          <NavLink to='/home' className='nv'>Home</NavLink>
        </div>
        {/* <div className="menulist">
          <NavLink to='/login' className='nv'>Login</NavLink>
        </div> */}
        <div className="menulist">
          <NavLink to='/user' className='nv'>Users</NavLink>
        </div>
        <div className="menulist">
          <NavLink to='/service' className='nv'>Services</NavLink>
        </div>
        <div className="menulist">
          <NavLink className='lg'>
            {
              (acdtl) ? (
                <>
                {(acdtl.accnam).split(' ').reduce((result, word) => result+=word.slice(0,1),'').toString()}
                </>
              ) : null
            }
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar