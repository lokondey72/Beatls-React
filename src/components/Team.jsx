import TeamComp from "./TeamComp";

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="common_heading">
          <h2>
            Our Team
            <img src="shape-1.png" alt="shape-1" />
          </h2>
        </div>
        <div className="items">
          <TeamComp imgUrl="team-img-1.webp" name="Sajal Sarder" post="Web Designer"/>
          <TeamComp imgUrl="team-img-2.webp" name="Sakeba Aney" post="Web Developer"/>
          <TeamComp imgUrl="team-img-3.webp" name="ABS Ujjal" post="Graphic Designer"/>
          <TeamComp imgUrl="team-img-4.webp" name="Aney Irin" post="Marn Developer"/>
        </div>
      </div>
    </section>
  );
};

export default Team;
