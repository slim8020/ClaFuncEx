import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const TextContainer = styled.View`
    flex : 1;
    border: 5px solid red;
    margin : 5px;
    padding : 5px;
`;

const StyledButton = styled.Button`
    flex : 1;
    border: 5px solid red;
    padding : 5px 5px;
    margin : 5px 5px;
`;

const FuncText = styled.Text`
    font-size: 20px;
`;

const ClaText = styled.Text`
    font-size: 20px;
`;


const Title = styled.Text`
    font-size: 36px;
`;

const FuncComp= param =>{
    var numberState = useState(param.initNumber);
    var dateState = useState(new Date().toString());

    var num = numberState[0];
    var setNum = numberState[1];

    var date = dateState[0];
    var setDate = dateState[1];

    console.log('numberState', numberState);

    return (
        <TextContainer>
            <FuncText>Function style component</FuncText>
            <Text>Number: {num}</Text>
            <Text>Date: {date} </Text>
            <StyledButton title="random" onPress={function(){setNum(Math.random())}}/>
            <StyledButton title="date" onPress={function(){setDate(Date().toString())}}/>
        </TextContainer>
       
    );
}

var classStyle = 'color:blue';

class ClassComp extends React.Component{
    state = {
        number: this.props.initNumber,
        date: new Date().toString()
    }

    UNSAFE_componentWillMount(){
        console.log('class => componentWilMount');
    }

    componentDidMount(){
        console.log('class => componentDidMount');
    }

    render(){
        console.log('class => render');
        return(
            <TextContainer>
                <ClaText>Class style component</ClaText>
                <Text>Number: {this.state.number}</Text>
                <Text>Date: {this.state.date} </Text>
                <StyledButton title="random" onPress={function(){this.setState({number:Math.random()})}.bind(this)}/>
                <StyledButton title="date" onPress={function(){this.setState({date:Date().toString()})}.bind(this)}/>
            </TextContainer>
        );
    }
}

export default function App() {
 
  return (
      <TextContainer>
          <Title>Hello World!</Title>
          <FuncComp  initNumber={3}/>
          <ClassComp initNumber={3}/>
      </TextContainer>
  );
}
