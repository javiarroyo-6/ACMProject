import React, { Component } from 'react';
import { Container, Header, View, Button, Fab, Right } from 'native-base';
import Icon from '@expo/vector-icons/Ionicons'
export default class FAB extends Component {
  constructor(props) {
  super(props)
    this.state = {
      active: 'true',
    };
  }


  
  render() {
    return (  
      <Container>
        <Header />
        <View style={{ flex: 1, }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="ios-add" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="ios-basket" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="ios-construct" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="ios-mail" />
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
}
