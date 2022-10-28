import "../Components/Styles/faq-card.scss";


export const FaqCard = () => {

    

    const handleDropdown = (e: React.BaseSyntheticEvent) => {
        e.currentTarget.classList.toggle("active-click");
    }


    // const contentList = document.getElementById("content-list");

    //     const pDivs = contentList?.getElementsByClassName("p-div");

    //     if (pDivs != undefined) {
    //         for (let i = 0; i < pDivs?.length; i++) {
    //             pDivs[i].addEventListener("click", handleDropdown())
    //         }
    //     }




    return (
        <div className="main">
            <div className="card-container">
                <div id="art">
                    <div className="illustration-BG">
                        <div className="illustration-board"></div>
                    </div>
                </div>
                

                <div className="faq-area">
                    <div className="heading"><h1>FAQ</h1></div>

                    <div className="p-group-arrow" >
                        <ul id="content-list">
                            <li>
                                <div className="p-div" onClick={(e) => handleDropdown(e)}>
                                    <div className="p-arrow" ><p className="main-text">How many team members can I invite?</p> <span></span></div>
                                    <div className="p-div-dropdown">
                                    <ul className="dropdown">
                                        <li>
                                            <p>You can invite up to 2 additional users on the Free plan. There is no limit on 
                                            team members for the Premium plan.</p>
                                        </li>
                                    </ul>
                                    </div>
                                    
                                </div>
                                
                            </li>
                        
                        
                        
                            <li>
                                <div className="p-div" onClick={(e) => handleDropdown(e)}>
                                    <div className="p-arrow"><p className="main-text">What is the maximum file upload size?</p> <span></span></div>
                                    <div className="p-div-dropdown">
                                        <ul className="dropdown">
                                            <li>
                                                <p>No more than 2GB. All files in your account must fit your allotted storage space.</p> 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        
                            
                        
                            <li>
                                <div className="p-div" onClick={(e) => handleDropdown(e)}>
                                    <div className="p-arrow"><p className="main-text">How do I reset my password?</p> <span></span></div>
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
                                <div className="p-div" onClick={(e) => handleDropdown(e)}>
                                    <div className="p-arrow"><p className="main-text">Can I cancel my subscription?</p> <span></span></div>
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
                                <div className="p-div" onClick={(e) => handleDropdown(e)}>
                                    <div className="p-arrow"><p className="main-text">Do you provide additional support?</p> <span></span></div>
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