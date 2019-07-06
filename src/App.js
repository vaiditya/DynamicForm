import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Data from "./Data";

function App() {
  const [multiselect, setMultiselect] = useState([]);
  const [content, setContent] = useState({});

  useEffect(() => {
    const data = Data.form.items.map(element => {
      return { id: element.id, value: null };
    });
    setContent(data);
  }, []);

  function handleChange(event, elementId) {
	  
    let data = content;
    let targetId = data.find(element => element.id === elementId);
    targetId.value = event.target.value;
    setContent(data);

    Array.isArray(event.target.value) && setMultiselect(event.target.value);
  }

  function handleSubmit() {}

  return (
    <div>
      <Grid container spacing={3}>
        {Data.form.items.map(element => {
          return (
            <Grid item xs={12 / (12 / Data.form.layout.columns)}>
              {element.type === "textfield" && (
                <TextField
                  id={element.id}
                  label={element.placeholder}
                  value={content[element.id]}
                  onChange={event => {
                    handleChange(event, element.id);
                  }}
                    InputProps={
                      element.mode === "readonly"
                        ? {
                            readOnly: true
                          }
                        : {}
                    }
                />
              )}
              {element.type === "multiselect" && (
                <Select
                  multiple
                  id={element.id}
                  value={multiselect}
                  onChange={event => {
                    handleChange(event, element.id);
                  }}
                >
                  {element.items.map(name => (
                    <MenuItem key={name} value={name}>
                      {name.text}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </Grid>
          );
        })}
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            CHECK
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
