import Divider from '@mui/material/Divider'

function Header() {
    const dividerStyles = {
        backgroundColor: 'black',
        height: '1.2px',
        width: '90vw%',
        marginLeft: '3%',
        marginTop: '-65px',
      };


  return (
    <div className="headerContainer">
      <h1 className="header">
          TELL ME 
          <br />
          WHERE TO GO.
      </h1>
      <Divider style={dividerStyles}/>
    </div>
  );
}

export default Header;
