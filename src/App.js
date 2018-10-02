// @flow
import React from 'react';
import {
  Box,
  SearchField,
  IconButton,
  Container,
} from 'gestalt';
import Movies from './Movies';

type State = {|
  searchQuery: string,
  searchText: string
|};

class App extends React.Component<{}, State> {
  state = {
    searchQuery: '',
    searchText: '',
  }

  timeout = null

  changeSearch = (evt: { value: string }) => {
    const searchQuery = evt.value;
    this.setState({ searchText: searchQuery });
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({ searchQuery });
    }, 300);
  }

  render() {
    const { searchQuery, searchText } = this.state;
    return (
      <Container>
        <Box color="white" shape="rounded" padding={3} display="flex" direction="row">
          {/* <Box display="flex">
            Sidebar
          </Box> */}
          <Box display="flex" direction="column" flex="grow">
            <Box display="flex" direction="row">
              <Box flex="grow" paddingX={2}>
                <SearchField
                  accessibilityLabel="Searh for movieeeez"
                  id="searchField"
                  onChange={this.changeSearch}
                  placeholder="Searh for movieeeez"
                  value={searchText}
                />
              </Box>
              <Box paddingX={2}>
                <IconButton
                  accessibilityLabel="Search"
                  icon="search"
                  size="md"
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" padding={3}>
              <Movies searchQuery={searchQuery} />
            </Box>
          </Box>
        </Box>
      </Container>
    );
  }
}
export default App;
