import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { Colors } from '../../../utils'
import { Gap } from '../../kecil'

const ListItem = ({title,desc,IconListLeft,IconListRight,colorTite,fontSizeTitle,onPress}) => {
    
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{flexDirection:'row',alignItems:"center"}}>
                <Image source={IconListLeft} style={styles.icon}/>
                <Gap width={10}/>
                <View>
                    <Text style={styles.title(fontSizeTitle,colorTite)}>{title}</Text>
                    {
                        desc != null && <Text style={styles.desc}>{desc}</Text>
                    }
                </View>
            </View>
            <View>
                {
                    IconListRight ?
                    <Image source={IconListRight} style={styles.icon}/>
                    :<Text>Undang Teman</Text>
                }     
            </View>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:Colors.background,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:Colors.borderColor,
        padding:15,
    },
    icon:{
        height:30,
        width:30
    },
    title:(fontSizeTitle,colorTite)=>({ 
        color:colorTite,
        fontSize:fontSizeTitle
    }),desc:{
        color:Colors.text
    }
})
