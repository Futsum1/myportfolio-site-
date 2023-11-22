import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
  state = {
    resumePdf: null,
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];
    this.setState({ resumePdf: file });
  };

  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="resume-grid">
          <Cell col={12}>
            {/* Add the file input */}
            <input type="file" accept=".pdf" onChange={this.handleFileChange} />

            {/* Display the PDF or image or URL here */}
            {/* You can use conditional rendering based on the type of content */}
            {this.state.resumePdf && (
              <iframe
                title="resume"
                style={{ width: '100%', height: '800px' }}
                src={URL.createObjectURL(this.state.resumePdf)}
              />
            )}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
