import React, { Component } from "react";
import { View, FlatList, ScrollView, Text } from "react-native";
import { ListItem, Card } from "react-native-elements";
import { LEADERS } from '../shared/leaders';



class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS
        };
    }
    static navigationOptions = {
        title: 'About Us'
    };
    render() {
        function History() {
            return (
                <Card title='Our History'>
                    <Text style={{ marginVertical: 10 }}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
                    <Text style={{ marginVertical: 10 }}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
                </Card>
            )
        }
        const { navigate } = this.props.navigation;
        const renderMenuItem = ({ item, index }) => {
            return (

                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    onPress={() => navigate('Dishdetail', { dishId: item.id })}
                    leftAvatar={{ source: require("./images/alberto.png") }}
                />
            );
        };
        return (
            <ScrollView>
                <History />
                <Card title='Corporate Leadership'>
                    <FlatList
                        data={this.state.leaders}
                        renderItem={renderMenuItem}
                        keyExtractor={item => item.id.toString()} />
                </Card >
            </ScrollView>
        );
    }
}
export default About