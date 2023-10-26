import React from "react";
import './estilos/skills.css'
function Skills(){
    return(
        <section class="skills" id="skills">
        <h2 class="title-skills">My <span>Skills</span></h2>
        <div class="skills-row">
            <div class="skills-column">
                <h3 class="titles-skills">Coding <span>Skill</span></h3>

                <div class="skill-box">
                    <div class="skills-content">

                        <div class="progres">
                            <h3>HTML <span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        
                        <div class="progres">
                            <h3>CSS <span>88%</span></h3>
                            <div class="bar"><span></span></div>                     
                    
                        </div>
                        
                        <div class="progres">
                            <h3>JavaScript <span>50%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>      
                        <div class="progres">
                            <h3>React <span>65%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>                     
                    </div>
                </div>
            </div>


            <div class="skills-column">
                <h3 class="titles-skills">Other <span>Skills</span></h3>

                <div class="skill-box">
                    <div class="skills-content">

                        <div class="progres">
                            <h3>Web designer <span>80%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        
                        <div class="progres">
                            <h3>Web developer <span>88%</span></h3>
                            <div class="bar"><span></span></div>                     
                        </div>
                        
                               
                    </div>
                </div>
            </div>



        </div>
    </section>

    )
}

export { Skills };