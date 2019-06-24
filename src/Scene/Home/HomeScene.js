/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Platform,Animated,StyleSheet, Text, View,ScrollView,TouchableOpacity,Modal,TouchableWithoutFeedback,UIManager,findNodeHandle} from 'react-native'
import theme from '../../widget/theme'
// import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'// tools

import Feather from 'react-native-vector-icons/Feather'
import dgram from 'react-native-udp'
// import DataRequest from '../../client/entity/DataRequest'
// import net from 'react-native-tcp'
// import SQLite from '../../db/SQLite'
// import HomeLog from '../../client/entity/HomeLog'

// var sqLite = new SQLite();
// var db;
var Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');
var Y=1;
var R=1;
type Props = {};
export default class HomeScene extends Component<Props> {

// static navigationOptions=()=>({
//     headerTitle:'设备'
// })

  constructor(Props){
    super(Props)

    this.state = {
    Arrow1:'right',
    Arrow2:'right',
    Arrow3:'right',
    Arrow4:'right',
    Arrow5:'right',
    Arrow6:'right',
    showOne:'none',
    showTwo:'none',
    showThree:'none',
    showFour:'none',
    showFive:'none',
    showSix:'none',
    }
  }

  _showOne = () => {
    if(this.state.showOne=='none'){
    this.setState({
    showOne:'flex',
    Arrow1:'down'
    })
  }
    else{
    this.setState({
    showOne:'none',
    Arrow1:'right'
    })
    }
  }

  _showTwo = () => {
  if(this.state.showTwo=='none'){
  this.setState({
    showTwo:'flex',
    Arrow2:'down'
    })
    }
  else{
    this.setState({
    showTwo:'none',
    Arrow2:'right'
    })
    }
  }

  _showThree = () => {
    if(this.state.showThree=='none'){
    this.setState({
    showThree:'flex',
    Arrow3:'down'
    })
  }
    else{
    this.setState({
    showThree:'none',
    Arrow3:'right'
    })
    }
  }

  _showFour = () => {
    if(this.state.showFour=='none'){
    this.setState({
    showFour:'flex',
    Arrow4:'down'
    })
  }
    else{
    this.setState({
    showFour:'none',
    Arrow4:'right'
    })
    }
  }
  _showFive = () => {
    if(this.state.showFive=='none'){
    this.setState({
    showFive:'flex',
    Arrow5:'down'
    })
  }
    else{
    this.setState({
    showFive:'none',
    Arrow5:'right'
    })
    }
  }
  _showSix = () => {
    if(this.state.showSix=='none'){
    this.setState({
    showSix:'flex',
    Arrow6:'down'
    })
  }
    else{
    this.setState({
    showSix:'none',
    Arrow6:'right'
    })
    }
  }

toByteArray = (obj) => {
  const uint = new Uint8Array(obj.length);
  for (var i = 0, l = obj.length; i < l; i++) {
      uint[i] = obj.charCodeAt(i);
  }
  return new Uint8Array(uint);
}

SendTCPf =(port,ip) => {
    let client=net.createConnection({host:ip,port:parseInt(port)})
    console.log("--------create connection succeed!");
    // const buf = this.toByteArray('mess') 
    client.write('okk \n');
    console.log("send");

  //   client.on('error', function(error) {
  //     console.log(">>>>>>>>>error:" + error);
  // });

    client.on('data', function(data) {  
      console.log('message was received', data)
      // lineArray=data.split(" ");
        // alert(typeof(lineArray))
        // alert(data==='hello');
        let str = data.toString().split("\n");
        for(let a of str){
          console.log(a)}
        });
        console.log(1111111111111111111)
}

//控制黄灯开
SendUDP = (port, ip, mess) => {
            let socket = dgram.createSocket('udp4')
            socket.bind(parseInt('8889'))
            // socket.once('listening', () => {
                const buf = this.toByteArray(mess) 
                socket.send(buf, 0, buf.length, parseInt(port), `${ip}`, () => {
                    // if (err) throw err
                    // console.log('message was sent') 
                //     socket.on('message', function(msg, rinfo) {
                //       console.log('receiving') 
                //       var str= String.fromCharCode.apply(null, new Uint8Array(msg))
                //       console.log('message was received', str)
                //   //     this.setState({
                //   //     msg:msg
                //   // })
                // })
                     socket.close()
                })
            // })
// console.log(this.state.ip + this.state.mess + this.state.port)
  }

  ControllerY=()=>{
    if(Y==1){
      this.SendUDP('4567','192.168.1.104','0A wm 123456 18-fe-34-a4-8c-2d 1');
    Y=0;
    }
    else{
      this.SendUDP('4567','192.168.1.104','0A wm 123456 18-fe-34-a4-8c-2d 0');
     Y=1;
    }
  }

  ControllerR=()=>{
    if(R==1){
      this.SendUDP('4567','192.168.1.104','0A wm 123456 18-fe-34-a4-8c-b7 1');
    R=0;
    }
    else{
      this.SendUDP('4567','192.168.1.104','0A wm 123456 18-fe-34-a4-8c-b7 0');
     R=1;
    }
  }
  render() {
    // let DataRequest1=new DataRequest();
    // DataRequest1.setKeyword('sssss')
    return (
      <View style={styles.container}>
           <View style={styles.TopBar}>
              <Text  style={{flex:1,fontSize:20 ,color:'black' ,textAlign:'center'}}>设备信息</Text>
              {/* <AntDesign 
              name={'search1'}
              size={16}
              color={'#999'}
              /> */}
              {/* lightbulb-on-outline */}
              </View>
            <View style={styles.MainBar}>
              <ScrollView>
                <View>
                  <TouchableOpacity  ref={(ref)=>this.buttonRef=ref} style={styles.scrollItems}  onPress={()=>{this._showOne()}}>
                    <Text style={styles.Text}><AntDesign name={this.state.Arrow1}/>主卧</Text><Text>2/2</Text>
                  </TouchableOpacity>
                </View>

                <View display={this.state.showOne} style={styles.light}>
                  {/* 灯一 */}
                  <View style={styles.insight1}>
                    <View>
                      <MaterialCommunityIcons name={'lightbulb-on-outline'} size={50} color='#5C5C5C'/>
                    </View>
                        <Text>主卧一灯{'\n'}{'\n'}状态：可用</Text>
                      <View  style={{marginLeft:60,marginTop:10}}>
                        <Feather name={'power'} size={45} color='#5C5C5C'  onPress={()=>{this.ControllerY()}} />
                        {/* onPress={this.Controller()} */}
                      </View>
                    <View>  
                        <Text style={{marginLeft:15, marginTop:20}}>开关</Text>
                    </View>
                  </View>

                  <View style={{height:1,color:'black'}}></View>
                  {/* 灯二 */}
                  <View style={styles.insight1}>
                    <View>
                      <MaterialCommunityIcons name={'lightbulb-on-outline'} size={50} color='#5C5C5C' onPress={()=>{this.ControllerR()}}/>
                    </View>
                        <Text>主卧二灯{'\n'}{'\n'}状态：可用</Text>
                      <View  style={{marginLeft:60,marginTop:10}}>
                        <Feather name={'power'} size={45} color='#5C5C5C'/>
                      </View>
                    <View>  
                        <Text style={{marginLeft:15, marginTop:20}}>开关</Text>
                    </View>
                  </View>

                  {/* <View style={{flexDirection:'row'}}>
                     <View  style={{marginLeft:10,marginTop:10}}>
                       <Feather name={'power'} size={70} color='#5C5C5C'/>
                    </View>
                     <View  style={{marginLeft:30,marginTop:10}}>
                       <Octicons name={'tools'} size={70} color='#5C5C5C'/>
                    </View> 
                  </View> */}

                </View>

                <View style={{height:1,color:'black'}}></View> 
                          {/* 分割线 */}
                <View style={{flex: 1}}>
                  <TouchableOpacity  ref={(ref)=>this.buttonRef=ref} style={styles.scrollItems}  onPress={()=>{this._showTwo()}}>
                    <Text style={styles.Text}><AntDesign name={this.state.Arrow2}/>次卧</Text><Text>0/1</Text>
                  </TouchableOpacity>
                    
                </View>

                <View display={this.state.showTwo} style={styles.light}>
                  {/* 灯一 */}
                  <View style={styles.insight1}>
                    <View>
                      <MaterialCommunityIcons name={'lightbulb-on-outline'} size={50} color='#5C5C5C'/>
                    </View>
                        <Text>次卧一灯{'\n'}{'\n'}状态：不可用</Text>
                      <View  style={{marginLeft:60,marginTop:10}}>
                        <Feather name={'power'} size={45} color='#5C5C5C'/>
                      </View>
                    <View>  
                        <Text style={{marginLeft:15, marginTop:20}}>开关</Text>
                    </View>
                  </View>

                  {/* <View style={{flexDirection:'row'}}>
                     <View  style={{marginLeft:10,marginTop:10}}>
                       <Feather name={'power'} size={70} color='#5C5C5C'/>
                    </View>
                     <View  style={{marginLeft:30,marginTop:10}}>
                       <Octicons name={'tools'} size={70} color='#5C5C5C'/>
                    </View> 
                  </View> */}

                </View>

                <View style={{height:1,color:'black'}}></View>
                          {/* 分割线 */}
                <View>
                  <TouchableOpacity style={styles.scrollItems} onPress={()=>{this._showThree()}}>
                    <Text style={styles.Text}><AntDesign name={this.state.Arrow3}/>客厅</Text><Text>0/2</Text>
                  </TouchableOpacity>
                </View>

                <View display={this.state.showThree} style={styles.light}>
                  {/* 灯一 */}
                  <View style={styles.insight1}>
                    <View>
                      <MaterialCommunityIcons name={'lightbulb-on-outline'} size={50} color='#5C5C5C'/>
                    </View>
                        <Text>客厅一灯{'\n'}{'\n'}状态：不可用</Text>
                      <View  style={{marginLeft:60,marginTop:10}}>
                        <Feather name={'power'} size={45} color='#5C5C5C'/>
                      </View>
                    <View>  
                        <Text style={{marginLeft:15, marginTop:20}}>开关</Text>
                    </View>
                  </View>

                  <View style={{height:1,color:'black'}}></View>
                  {/* 灯二 */}
                  <View style={styles.insight1}>
                    <View>
                      <MaterialCommunityIcons name={'lightbulb-on-outline'} size={50} color='#5C5C5C'/>
                    </View>
                        <Text>客厅二灯{'\n'}{'\n'}状态：不可用</Text>
                      <View  style={{marginLeft:60,marginTop:10}}>
                        <Feather name={'power'} size={45} color='#5C5C5C'/>
                      </View>
                    <View>  
                        <Text style={{marginLeft:15, marginTop:20}}>开关</Text>
                    </View>
                  </View>

                  {/* <View style={{flexDirection:'row'}}>
                     <View  style={{marginLeft:10,marginTop:10}}>
                       <Feather name={'power'} size={70} color='#5C5C5C'/>
                    </View>
                     <View  style={{marginLeft:30,marginTop:10}}>
                       <Octicons name={'tools'} size={70} color='#5C5C5C'/>
                    </View> 
                  </View> */}

                </View>

                <View style={{height:1,color:'black'}}></View> 
                          {/* 分割线 */}
                <View>
                  <TouchableOpacity  ref={(ref)=>this.buttonRef=ref} style={styles.scrollItems}  onPress={()=>{this._showFour()}}>
                    <Text style={styles.Text}><AntDesign name={this.state.Arrow4}/>阳台</Text><Text>0/1</Text>
                  </TouchableOpacity>
                </View>

                <View display={this.state.showFour} style={styles.light}>
                  {/* 灯一 */}
                  <View style={styles.insight1}>
                    <View>
                      <MaterialCommunityIcons name={'lightbulb-on-outline'} size={50} color='#5C5C5C'/>
                    </View>
                        <Text>阳台一灯{'\n'}{'\n'}状态：不可用</Text>
                      <View  style={{marginLeft:60,marginTop:10}}>
                        <Feather name={'power'} size={45} color='#5C5C5C'/>
                      </View>
                    <View>  
                        <Text style={{marginLeft:15, marginTop:20}}>开关</Text>
                    </View>
                  </View>


                  {/* <View style={{flexDirection:'row'}}>
                     <View  style={{marginLeft:10,marginTop:10}}>
                       <Feather name={'power'} size={70} color='#5C5C5C'/>
                    </View>
                     <View  style={{marginLeft:30,marginTop:10}}>
                       <Octicons name={'tools'} size={70} color='#5C5C5C'/>
                    </View> 
                  </View> */}

                </View>

                <View style={{height:1,color:'black'}}></View> 
                          {/* 分割线 */}
                <View>
                  <TouchableOpacity  ref={(ref)=>this.buttonRef=ref} style={styles.scrollItems}  onPress={()=>{this._showFive()}}>
                    <Text style={styles.Text}><AntDesign name={this.state.Arrow5}/>卫生间</Text><Text>0/1</Text>
                  </TouchableOpacity>
                </View>

                <View display={this.state.showFive} style={styles.light}>
                  {/* 灯一 */}
                  <View style={styles.insight1}>
                    <View>
                      <MaterialCommunityIcons name={'lightbulb-on-outline'} size={50} color='#5C5C5C'/>
                    </View>
                        <Text>卫生间一灯{'\n'}{'\n'}状态：不可用</Text>
                      <View  style={{marginLeft:60,marginTop:10}}>
                        <Feather name={'power'} size={45} color='#5C5C5C'/>
                      </View>
                    <View>  
                        <Text style={{marginLeft:15, marginTop:20}}>开关</Text>
                    </View>
                  </View>

              

                  {/* <View style={{flexDirection:'row'}}>
                     <View  style={{marginLeft:10,marginTop:10}}>
                       <Feather name={'power'} size={70} color='#5C5C5C'/>
                    </View>
                     <View  style={{marginLeft:30,marginTop:10}}>
                       <Octicons name={'tools'} size={70} color='#5C5C5C'/>
                    </View> 
                  </View> */}

                </View>

                <View style={{height:1,color:'black'}}></View>
                          {/* 分割线 */}
                <View>
                  <TouchableOpacity  ref={(ref)=>this.buttonRef=ref} style={styles.scrollItems}  onPress={()=>{this._showSix()}}>
                    <Text style={styles.Text}><AntDesign name={this.state.Arrow6}/>餐厅</Text>
                  </TouchableOpacity>
                </View>

                <View display={this.state.showSix} style={styles.light}>
                <View style={styles.insight1}>
                    <View>
                      <MaterialCommunityIcons name={'lightbulb-on-outline'} size={50} color='#5C5C5C'/>
                    </View>
                        <Text>餐厅一灯{'\n'}{'\n'}状态：不可用</Text>
                      <View  style={{marginLeft:60,marginTop:10}}>
                        <Feather name={'power'} size={45} color='#5C5C5C'/>
                      </View>
                    <View>  
                        <Text style={{marginLeft:15, marginTop:20}}>开关</Text>
                    </View>
                  </View>
                </View>

                <View style={{height:1,color:'black'}}></View>  
              </ScrollView>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:theme.lightGray
  },
  TopBar:{
    height:40,
     backgroundColor:'#0066cc',
    // backgroundColor:'#F5FCFF',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  MainBar:{
    height:500,
    backgroundColor:'#9999',
    // backgroundColor:'#0066cc',
   
  },
  scrollItems:{
    backgroundColor:'white',
    flexDirection:'row',
    height:40,
    alignItems:'center',
    justifyContent:'center'
  },
  Text:{
    flex:1,
    color:'#333333',
    fontSize:16,
    marginLeft:width*0.03
  },
  light:{
    flexDirection:'column',
    // height:170,
    backgroundColor:'#FFFAFA',
  },
  insight1:{
    flexDirection:'row',
    height:80,
  },
});
