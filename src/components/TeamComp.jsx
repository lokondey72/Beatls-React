const TeamComp = ({imgUrl,name,post}) => {
  return (
    <div className="team_col">
      <div className="team_img">
        <img src={imgUrl} alt="team-img-1" />
        <div className="overly">
          <ul>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
      <h3>{name}</h3>
      <p>{post}</p>
    </div>
  );
};

export default TeamComp;
