import { Image, Linking, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in javascript 21-ES12,
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                    }}
                    style={styles.image} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Just like every year, Javascript brings in new features. This year
                        javascript is bringing 4 new features, which are almost in
                        production rollout. I won't be wasting much more time and directly
                        jump to code with easy to understand examples.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <Text numberOfLines={3}>
                        <TouchableOpacity onPress={()=>openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                            <Text style={styles.socialLinks}>Read More</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>openWebsite('https://www.instagram.com/arjun_sharma1231/?hl=en')}>
                            <Text>Follow Me</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card: {
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    headingContainer: {
        height:40,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    headerText: {
        color:"black",
        fontSize:16,
        fontWeight:'600',
    },
    image: {
        height: 190,
        objectFit:'contain',
    },
    bodyContainer: {
        padding:10,
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    socialLinks:{
        fontSize:16,
        color:"#7c7c7c",
        paddingHorizontal:10,
        paddingVertical:8,
        borderRadius:6,
    },
})