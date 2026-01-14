import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard"; 
import QIQIImage from "../components/ProfileCard/QIQI.jpg";
import ParticlesBackground from "../components/ParticlesBackground"; 
import TextPressure from "../components/TextPressure/TextPressure"; 

export default function Home() {

  return (
    <div className="page" style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: '30px',
      paddingBottom: '50px'
    }}>

      <ParticlesBackground />

      <div className="main-content-wrapper" style={{
        position: 'relative',
        zIndex: 1,
        width: '80%', 
        maxWidth: '1200px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        gap: '60px',
        
      }}>

        <div className="top-section" style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap', 
          gap: '40px',
          width: '100%'
        }}>

          <div className="text-intro" style={{
            textAlign: 'center', 
            flex: '1 1 auto', 
            minWidth: '280px',
            color: 'white', 
            padding: '20px',
          }}>
            <div style={{ position: 'relative' }}>
              <TextPressure
                text="Hello, Saya Hafidz Haqiqi"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </div>

            <p style={{ marginTop: '40px', fontSize: '1.2em' }}>web developer</p>
          </div>

          <div className="photo-card-container" style={{
            flex: '0 0 auto', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '300px', 
            padding: '15px',
          }}>
            <ProfileCard
              avatarUrl={QIQIImage}
              miniAvatarUrl={QIQIImage}
              name="Hafidz Haqiqi" 
              title="Mahasiswa" 
              handle="@hf_dzzz" 
              status="Online"
              showBehindGradient={false}
              imageLoadingStrategy="eager" 
            />
          </div>
        </div>


      </div>
    </div>
  );
}
