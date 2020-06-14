import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
    ScrollView,
} from 'react-native'
// import {ScrollView} from "react-native-web";


class App extends Component {

  state = {
      task:'',
      tasklist:[],



  }
    handletask = (text) => {
        this.setState({task: text })

    }
    handlebuton=(kim)=>
    {

            this.state.tasklist.push(this.state.task);
             this.setState({task: '' })


    }
    renderitem=(item) => {




          return (<View style={styles.kutu}>

              <Text key={this.state.tasklist.indexOf(item).toString()} style={styles.yazi}>
                  {

                      item

                  }
              </Text>

          </View>)




    }




 render() {
    return (
        //main
        <View style={{backgroundColor:"#BDBDBD",flex:1}}>
        {/*head */}
        <View style={styles.head} >

          {/*  input box */}
          <View  style={styles.header} >
              <TextInput style={styles.headtxtinput}
                         key={"txt"}
                         value={this.state.task}
                         placeholder = "Eklemek istediğin herşey"
                         autoCapitalize = "none"
                         onChangeText = {text=>this.handletask(text) }

              />

          </View>

        {/*button add */}
        <TouchableOpacity
            key={"buton"}
            style={styles.buton}
            onPress={()=>this.handlebuton()}
        >
         <Text>Ekle</Text>
        </TouchableOpacity>


        </View>
        {/*end to header */}


            <View style={styles.hr}/>



            <View style={{backgroundColor:"#BDBDBD"}}>
                <ScrollView style={{backgroundColor:"#BDBDBD"}} >
                    {
                        this.state.tasklist.map((item)=>this.renderitem(item))

                    }

                    <View style={styles.hr}/>
                    <View style={{height:135}}/>
                </ScrollView>


            </View>


        </View>


    )
  }
}




const styles = StyleSheet.create({

    header:{ margin:5,flex:1,backgroundColor:"#BDBDBD",justifyContent:"center" },
headtxtinput:{ backgroundColor:"#9E9E9E",height:40 ,borderRadius:5,textAlign:"center"},
head:{paddingTop:21,flexDirection:"row",backgroundColor:"#BDBDBD",height:120, },
yazi:{fontSize:16,paddingLeft:10,color:"#F5F5F5",},
kutu:{ backgroundColor:"#757575",alignItems:"center", height:75,borderRadius:15,margin:3,flexDirection:"row",},

hr:{backgroundColor:"gray",height:2,margin:5},

buton:
{margin:5,
    minWidth:75,
    backgroundColor:"#607D8B",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:0,
    borderRadius:20,

},



})

export default App;

