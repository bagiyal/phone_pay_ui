import { Button, StyleSheet, Text, View, Butoon, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Circle = () => {
    const [circleCount, setCicleCount] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

    const addCircle = () => {
        const copy = [...circleCount, { count: 0, color: 'white' }];
        setCicleCount(copy);
        console.log(" copy ", circleCount);
    }

    const handleCheck = (index) => {
        setCicleCount((prev) => {
            const updatedCircles = [...prev];
            const updateCir = updatedCircles[index];

            updateCir.color = updateCir.color === 'grey' ? 'white' : 'grey';

            updateCir.count = updateCir.color === 'grey' ? updateCir.count + 1 : Math.max(updateCir.count - 1, 0);

            const newTotal = updatedCircles.reduce((sum, curr) => (curr.count !== undefined ? sum + curr.count : sum), 0);
            setTotalCount(newTotal);

            return updatedCircles;
        });
    };

    return (
        <View style={{}}>
            <TouchableOpacity onPress={() => addCircle()}>
                <Text style={styles.circleText}>Circle</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'column' }}>
                {circleCount.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.circles, { backgroundColor: item.color, height: 150, width: 150, borderRadius: 75 }]}
                        onPress={() => handleCheck(index)}
                    ></TouchableOpacity>
                ))}
            </View>
            <Text style={{ fontSize: 24, margin: 20, color: 'black' }}>{totalCount}</Text>
        </View>
    )
}

export default Circle

const styles = StyleSheet.create({
    circleText: {
        fontSize: 22,
    },
    circles: {
        height: 150,
        width: 150,
        margin: 20,
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
    },
})