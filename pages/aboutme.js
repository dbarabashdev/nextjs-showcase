const AboutMePage = () => {
  return (
    <div>
      <h1>Hey, I'm Dmitry</h1>
      <h4>Front-end Engineer</h4>
      <style jsx>{`
        p {
          color: blue;
          cursor: pointer;
        }
      `}</style>
      <p onClick={() => window.history.back()}>Back</p>
    </div>
  )
}

export default AboutMePage
