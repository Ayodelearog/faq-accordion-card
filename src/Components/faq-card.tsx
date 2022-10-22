import { useState } from "react";
import "../Components/Styles/faq-card.scss";


export const FaqCard = () => {
    const [hideDropdown, setHideDropdown] = useState(true);



    const handleDropdown = (e: React.BaseSyntheticEvent) => {
        console.log(e.target.childNodes)
        
        e.target.classList.toggle("active-click");
        // e.target.classList.toggle("span-click")
        setHideDropdown(!hideDropdown)
        
        // e.target.classList.remove("p-div-dropdown")
        // console.log("hhh")
        console.log(hideDropdown)
    }





    return (
        <div className="main">
            <div className="card-container">
                <div className="illustration-BG">
                    {/* <img src="./images/bg-pattern-mobile.svg" alt="" /> */}
                    <div className="illustration-board"></div>
                </div>
                

                <div className="faq-area">
                    <div className="heading"><h1>FAQ</h1></div>

                    <div className="p-group-arrow" onClick={(e) => handleDropdown(e)}>
                        <ul className="content-list">
                            <li>
                                <div className="p-div" >
                                    <div className="p-arrow" ><p>How many team members can I invite?</p> <span></span></div>
                                    {!hideDropdown && <div className="p-div-dropdown">
                                    <ul className="dropdown">
                                        <li>
                                            <p>You can invite up to 2 additional users on the Free plan. There is no limit on 
                                            team members for the Premium plan.</p>
                                        </li>
                                    </ul>
                                    </div>}
                                    
                                </div>
                                
                            </li>
                        
                        
                        
                            <li>
                                <div className="p-div" onClick={(e) => handleDropdown(e)}>
                                    <div className="p-arrow"><p>What is the maximum file upload size?</p> <span></span></div>
                                    {!hideDropdown && <div className="p-div-dropdown">
                                        <ul className="dropdown">
                                            <li>
                                                <p>No more than 2GB. All files in your account must fit your allotted storage space.</p> 
                                            </li>
                                        </ul>
                                    </div>}
                                </div>
                            </li>
                        
                            
                        
                            <li>
                                <div className="p-div">
                                    <div className="p-arrow"><p>How do I reset my password?</p> <span></span></div>
                                    <div className="p-div-dropdown">
                                    <ul className="dropdown">
                                        <li>
                                            <p>Click “Forgot password” from the login page or “Change password” from your profile page.
                                            A reset link will be emailed to you.</p>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </li>
                        
                            
                        
                            <li>
                                <div className="p-div">
                                    <div className="p-arrow"><p>Can I cancel my subscription?</p> <span></span></div>
                                    <div className="p-div-dropdown">
                                    <ul className="dropdown">
                                        <li>
                                            <p>Yes! Send us a message and we’ll process your request no questions asked.</p> 
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </li>
                        
                            
                        
                            <li>
                                <div className="p-div">
                                    <div className="p-arrow"><p>Do you provide additional support?</p> <span></span></div>
                                    <div className="p-div-dropdown">
                                    <ul className="dropdown">
                                        <li>
                                            <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p> 
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}