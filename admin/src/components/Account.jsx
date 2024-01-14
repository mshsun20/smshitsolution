import { useState } from 'react'
import axios from 'axios'
import server from '../Server'
import { useNavigate } from 'react-router-dom'

const Account = () => {
    const [vl, setVl] = useState()
    let name, value
    const navig = useNavigate()

    const hndlinp = (e) => {
        name = e.target.name
        value = e.target.value
        setVl({...vl, [name]:value})
    }

    const hndlsub = async (e) => {
        e.preventDefault()
        const {accunam, accphn, acceml, accpass, acnfpass, accnam, accadhrn, accaddr, acccntry, accstate, accdist, acccty, accloc, accpin, accgen, accdesig, acccomp, accdept, accexp, accqual, accuniv, accclg, accgrade} = vl

        try {
            if (!accunam || !accphn || !acceml || !accpass || !acnfpass || !accnam || !accadhrn || !accaddr || !accpin || !accdesig || !accexp || !accqual || !accgrade) {
                window.alert('All Mandatory Fields Must be Filled...!')
            }
            else {
                if (accpass === acnfpass) {
                    const res = await axios.post(`${server}/admin/create`, {accunam, accphn, acceml, accpass, accnam, accadhrn, accaddr, acccntry, accstate, accdist, acccty, accloc, accpin, accgen, accdesig, acccomp, accdept, accexp, accqual, accuniv, accclg, accgrade})
                    const data = await res.data
                    // console.log(data)
                    if (data.statuscode === 220) {
                        window.alert(data.success)
                        navig('/login')
                    }
                    else {
                        window.alert(data.error)
                    }
                }
                else {
                    window.alert('Confirm Password Must be Same...!')
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        <div className="wbpg">
            <div className="main">
                <div className="hdr">Admin Account</div>
                <div className="frm">
                    <div id="accdtl">
                        <div className="hdng">Account Details:</div>
                        <div className="frmgrp">
                            <label htmlFor="accunam">Username</label>
                            <input type="text" name="accunam" id="accunam" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accphn">Phone Number</label>
                            <input type="text" name="accphn" id="accphn" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="acceml">Email Id</label>
                            <input type="text" name="acceml" id="acceml" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accpass">Password</label>
                            <input type="password" name="accpass" id="accpass" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="acnfpass">Confirm Password</label>
                            <input type="password" name="acnfpass" id="acnfpass" onChange={hndlinp} />
                        </div>
                    </div>
                    <div id="prsnldtl">
                        <div className="hdng">Personal Details:</div>
                        <div className="frmgrp">
                            <label htmlFor="accnam">Full Name</label>
                            <input type="text" name="accnam" id="accnam" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accadhrn">Aadhaar Number</label>
                            <input type="text" name="accadhrn" id="accadhrn" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accaddr">Address</label>
                            <input type="text" name="accaddr" id="accaddr" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="acccntry">Country</label>
                            <select name="acccntry" id="acccntry" onChange={hndlinp}>
                                <option value="India">India</option>
                            </select>
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accstate">State</label>
                            <select name="accstate" id="accstate" onChange={hndlinp}>
                                <option value="0">--------------------select--------------------</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujrat">Gujrat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Ladakh">Ladakh</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accdist">District</label>
                            <input type="text" name="accdist" id="accdist" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="acccty">City</label>
                            <input type="text" name="acccty" id="acccty" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accloc">Location</label>
                            <input type="text" name="accloc" id="accloc" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accpin">Pin Code</label>
                            <input type="text" name="accpin" id="accpin" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accgen">Gender</label>
                            <select name="accgen" id="accgen" onChange={hndlinp}>
                                <option value="0">-----Select-----</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>
                    <div id="prfssdtl">
                        <div className="hdng">Professional Details:</div>
                        <div className="frmgrp">
                            <label htmlFor="accdesig">Designation</label>
                            <input type="text" name="accdesig" id="accdesig" onChange={hndlinp} />
                            {/* <select name="accdesig" id="accdesig" onChange={hndlinp}></select> */}
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="acccomp">Company</label>
                            <input type="text" name="acccomp" id="acccomp" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accdept">Department</label>
                            <select name="accdept" id="accdept" onChange={hndlinp}>
                                <option value="0">-------Select-------</option>
                                <option value="IT">IT</option>
                                <option value="Analyst">Analyst</option>
                                <option value="Logistics">Logistics</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Production">Production</option>
                                <option value="Branding">Branding</option>
                                <option value="Commercial">Commercial</option>
                                <option value="CRM">CRM</option>
                                <option value="Sales">Sales</option>
                                <option value="Calling">Calling</option>
                                <option value="HR">HR</option>
                            </select>
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accexp">Experience</label>
                            <select name="accexp" id="accexp" onChange={hndlinp}>
                                <option value="0">-------Select-------</option>
                                <option value="Fresher">Fresher</option>
                                <option value="1yr">1yr</option>
                                <option value="2yrs">2yrs</option>
                                <option value="3yrs">3yrs</option>
                                <option value="4yrs">4yrs</option>
                                <option value="5yrs">5yrs</option>
                                <option value="More than 5yrs">More than 5yrs</option>
                            </select>
                        </div>
                    </div>
                    <div id="edudtl">
                        <div className="hdng">Educational Details:</div>
                        <div className="frmgrp">
                            <label htmlFor="accqual">Qualification</label>
                            <select name="accqual" id="accqual" onChange={hndlinp}>
                                <option value="0">----------Select----------</option>
                                <option value="Secondary">Secondary</option>
                                <option value="Higher Secondary">Higher Secondary</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Graduate">Graduate</option>
                                <option value="Post Graduate">Post Graduate</option>
                                <option value="Doctorate">Doctorate</option>
                            </select>
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accuniv">University</label>
                            <input type="text" name="accuniv" id="accuniv" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accclg">College</label>
                            <input type="text" name="accclg" id="accclg" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accgrade">Grade</label>
                            <input type="text" name="accgrade" id="accgrade" onChange={hndlinp} />
                        </div>
                    </div>
                    <div className="frmgrp">
                        <input type="submit" value="Create" onClick={hndlsub} />
                    </div>
                </div>
            </div>                
        </div>
    </>
  )
}

export default Account