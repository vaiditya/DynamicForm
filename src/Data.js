export default{
    "form": {
      "layout": {
        "columns": 4
      },
  
      "items": [{
        "id": "teamLead",
        "label": "Team Lead",
        "placeholder": "Enter Lead Name",
        "type": "textfield",
        "value": "John Doe",
        "mode": "readonly"
      }, {
        "id": "teamMembers",
        "label": "Team Members",
        "placeholder": "Select Team Member",
        "type": "multiselect",
        "value": "Amitkumar Chauhan",
        "mode": "editable",
        "items": [{
          "id": 1,
          "text": "Member 1",
        }, {
          "id": 2,
          "text": "Member 2",
          "selected": true
        }, {
          "id": 3,
          "text": "Member 3",
          "selected": true
        }, {
          "id": 4,
          "text": "Member 4"
        }]
      }],
  
      "validation": {
        "required": {
          "teamLead": {
            "message": "Please Enter Team Lead Name"
          }
        }
      }
    }
  }