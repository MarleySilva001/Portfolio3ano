import { Text, Pressable, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

const ButtonR = ({ text, href, source }) => {
    return (
        <Link href={href}>
            <Pressable style={styles.button}>
                <Image 
                style={styles.img}
                source={source}
                />
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        </Link>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 90,
        height: 90,
        padding: 10,
        margin: 0,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        textAlign: 'center',
        fontSize: 11,
        width: '100%',
    },
    img:{
        width: 55,
        height: 55,
        borderRadius: 8,
        marginBottom: 6
    }
});

export default ButtonR;