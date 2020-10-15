import Footer from '../components/Footer'
import Section_1 from '../components/Section_1'
import TeamMember from '../components/TeamMember'
import PartnerCarousel from '../components/PartnerCarousel'
import ExchangesCarousel from '../components/ExchangesCarousel'



export default function Home() {
  return (
    <div className="appContainer">
      <div className="sizeRestrictor">
        <main>
          <Section_1 background_color="#9A5EA4">
            <div className="main-contents">
              <div className="main_text_container">
                <h1 className="main-title">
                  Token Dashboard
                </h1>
                <div className="main-aside">
                  <p className="section-2-text"> <em><span className="section-2-opener">The FNX Token Dashboard </span></em>
                  <span  className="section-2-closer">shows live data about the FNX token.</span> </p>
                </div>
                <div className="fnx_circle">
                  <div className="fnx_circle_content">FNX</div>
                </div>
              </div>
            </div>
          </Section_1>
          <div className="dashboard_container">
            <div className="dashboard">

            </div>
          </div>
          
          
        </main>
        
         <Footer />
      </div>

      <style jsx>{`
        .fnx_circle {
          border-radius: 100%;
          border: 10px solid white;
          width: 200px;
          height: 200px;
          padding: 40px;
        }
        .fnx_circle_content {
          border-radius: 100%;
          border: 2px solid #A2D9DA;
          width: 100px;
          height: 100px;

        }
        .section_1_large_bg{
          display: none;
        }
         .sub-section-header {
          color: #9F66A9;   
        }
        .carousel-container {
          padding-bottom: 3rem;
          max-width: 80%;
          margin: auto auto 5rem;
          width: 1000px;
          bottom: 2.5em;
          overflow-y: visible;
        }
        .team-member-container{
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin: auto;
          flex-wrap: wrap;
        }
        .team-header-container {
          margin-bottom: 0rem;
          text-align: center
        }
        .team {
          justify-content: center;
          margin: auto;
          margin-top: 100px;
          padding: 0px 0px;
          padding-bottom: 100px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          background-color: rgb(208, 180, 213);
          border-radius: 50px;
          border: 15px solid rgba(159, 102, 169, 0.08);
          max-width: 1000px;
        }
        .team_bg_image {
          position: absolute;
          bottom: 500px;
          right: -500px;
          width: 800px;
          z-index: -10;
        }
        .team-section {
          bottom: 150px;
          width: 100%;
          justify-content: center;
          margin: 100px auto;
          padding-bottom: 100px;
          display: flex;
          flex-wrap: wrap;
          background-color: rgba(159, 102, 169, 0.2);
        }
        .team-size-restrictor {
          max-width: 1920px;
        }
        .team-title {
          margin: 0 auto;
          font-weight: 700;
          font-size: 40px;
          color: #9F66A9;
          width: 250px;
          margin-top: 20px;
          max-width: 80%;
        }
        .partners-title {
          width: 1000px;
          max-width: 80%;
          margin: auto;
          margin-bottom: 20px;
          font-weight: 700;
          font-size: 40px;
        }
        .exchanges-title {
          width: 1000px;
          max-width: 80%;
          margin: auto;
          margin-bottom: 20px;
          font-weight: 700;
          font-size: 40px;
        }
        .section_1_large_bg {
          position: relative;
          width: 650px;
          right: -10rem;
          top: 800px;
          z-index: 1
        }
       
        main {
          width: 100%;
          margin: auto;
          overflow: visible
        }    
        .appContainer {
          overflow: hidden
        }      
        h4 {
          font-weight: 900;
          margin: 0;
          padding: 0;
          line-height: 1.5rem
        }
        h5 {
          font-weight: 900;
          margin: 0;
          padding: 0
        }
         
           
          .section-2-closer {
            font-size: 26px;
            font-style: italic;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
            font-style: italic;
          }
         
         .about_bg{
            left: 800px;
            bottom: 400px;
            width: 1900px;
            position: relative;
            transform: scale(1, 1);
          }
        @media (min-width: 1700px) {
          .team-section {
            padding-bottom: 100px;
          }
          .main_text_container {
            width: 650px;
          }
          .main-contents {
            display: block;
            padding-top: 0px;
            padding-right: 0px;
            line-height: 1.5;
            width: 1200px;
            margin: auto;
          }
          .about_bg{
            left: 800px;
            bottom: 300px;
            width: 1900px;
            position: relative;
            transform: scale(1, 1);
          }
          
         
          .team {
            width: 90%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 40px;
            width: 250px;
            padding-bottom: 40px;
          }
          .main_text_container {
             width: 650px;
          }
          .main-contents {
            display: block;
            padding-top: 0px;
            padding-left: 20px;
            padding-right: 0px;
            line-height: 1.5;
            width: 1200px;
            margin: auto;
          }
          .main-title {
            margin-top: 50px;
            line-height: 4rem; 
            font-weight: 900;
            width: 300px;
            font-size: 50px;
            margin-bottom: 20px;
          }
         
          .team-size-restrictor {
            width: 1000px;
          }
         
          .section-2-closer {
            font-size: 20px;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
          }
        }

        @media (min-width: 1200px) and (max-width: 1700px) { 
          .main_text_container {
            padding-left: 30px;
            width: 550px;
          }
          .main-contents {
            display: block;
            padding-top: 0px;
            padding-right: 0px;
            line-height: 1.5;
            width: 1000px;
            margin: auto;
          }
          .main-title {
            margin-top: 50px;
            line-height: 4rem; 
            font-weight: 900;
            width: 300px;
            font-size: 60px;
            margin-bottom: 20px;
          }
         
          .about_bg{
            left: 650px;
            bottom: 300px;
            width: 1900px;
            position: relative;
            transform: scale(1, 1);
          }
          .section-2-closer {
            font-size: 22px;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
          }
           
          .section_1_large_bg {
            width: 400px;
            right: 5rem;
            top: 1rem; 
          }     
          .team-size-restrictor {
            width: 1000px;
          }
          .team-member-container {
           width: 100%;
          }
          .team {
            width: 90%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 40px;
            padding-bottom: 40px;
            width: 250px;
          }
          .partners-title {
            width: 1000px;
            font-size: 40px;
          }
          .exchanges-title {
            width: 1000px;
            font-size: 40px;
          }     
          .carousel-container {
            padding-bottom: 3rem;
            width: 1000px;
          }   
          .team-section {
            padding-bottom: 100px;
          }
         
        }

        @media (min-width: 800px) and (max-width: 1200px) {
          .main_text_container {
            width: 700px;
            margin: 0;
            left: 0;
            top: 0;
          }
          .main-contents {
            display: block;
            line-height: 1.5;
            width: 700px;
            margin: auto;
          }
          .main-title {
            line-height: 4rem; 
            font-weight: 900;
            width: 300px;
            font-size: 50px;
            margin-bottom: 20px;
          }
          .main-title {
            margin-top: 50px;
            line-height: 4rem; 
            font-weight: 900;
            width: 300px;
            font-size: 60px;
            margin-bottom: 20px;
            

          }
         
          .about_bg{
            left: 500px;
            bottom: 00px;
            width: 700px;
            position: relative;
            transform: scale(1, 1);
          }
          .section-2-closer {
            font-size: 22px;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
          }
           
          .instructions {
            font-size: 16px;
          }
          .section_1_large_bg {
            width: 400px;
            right: 5rem;
            top: 1rem; 
          }     
          .team-size-restrictor {
            width: 1000px;
          }
          .team-member-container {
           width: 100%;
           max-width: 1000px;
          }
          .team {
            width: 90%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 40px;
            width: 250px;
            padding-bottom: 40px;
          }
          .partners-title {
            width: 1000px;
            font-size: 40px;
          }
          .exchanges-title {
            width: 1000px;
            font-size: 40px;
          }     
          .carousel-container {
            padding-bottom: 3rem;
            width: 1000px;
          }   
       }   

       
       @media (max-width: 800px){
          .main_text_container {
            width: 90%;
            margin: auto;
            min-width: 330px;
            left: 0;
            top: 0;
          }
          .main-contents {
            display: block;
            line-height: 1.5;
            width: 100%;
            margin: auto;            
          }
          .main-title {
            line-height: 50px; 
            font-weight: 900;
            width: 300px;
            font-size: 40px;
            margin-top: 50px;
            margin-bottom: 20px;
          }
           
          .section-2-closer {
            font-size: 18px;
          }
          .section-2-opener {
            font-size: 30px;
            font-weight: 700;
          }
          .about_bg{
            left: 500px;
            bottom: 00px;
            width: 700px;
            position: relative;
            transform: scale(1, 1);
          }
          
           
          .instructions {
            font-size: 16px;
          }
          .section_1_large_bg {
            width: 400px;
            right: 5rem;
            top: 1rem; 
          }     
          .team-size-restrictor {
            width: 1000px;
          }
          .team-member-container {
           width: 100%;
           max-width: 1000px;
          }
          .team {
            width: 90%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 40px;
            width: 250px;
            padding-bottom: 20px;
          }
          .partners-title {
            width: 1000px;
            font-size: 40px;
          }
          .exchanges-title {
            width: 1000px;
            font-size: 40px;
          }     
          .carousel-container {
            padding-bottom: 3rem;
            width: 1000px;
          }   
          
       }
      `}
      </style>
    </div>)}
