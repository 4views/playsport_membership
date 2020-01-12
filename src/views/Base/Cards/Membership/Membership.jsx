import React from 'react';
import { Button } from 'reactstrap';
import { getDate } from '../../../../helpers/helperFunctions';

//translation string : since,delete

function Membership(props){
        return (
          <div className="membership_container" id={props.id}>
            <div className="membership_info">
              <h3 className="membership_title">{props.clubName}</h3>
              <span className="membership_sport"><p>{props.sportArt}</p></span>
              <div className="membership_userRoles">
              {typeof(props.userRole) !== 'string' ? 
              (props.userRole.map(userRole => (
              <span className="membership_userRole" key={userRole}>{userRole}</span> ) 
              )) : <span className="membership_userRole">{props.userRole}</span>}
            </div>
              <p>since: {getDate(props.sinceDate) }</p>
            </div>
            <div className="membership_delete">
              <Button block color="danger" onClick={props.buttonAction}>Delete</Button>
            </div>
          </div>
        );
}

export default Membership;