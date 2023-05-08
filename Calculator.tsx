import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";

const Calculator = () => {
    const [input, setInput] = useState('0');
    const handleInput = (value: string) => {
        if (value=='C'){
            setInput('0');
        }else{
            setInput(input == '0' ? value: input+value)
        }
    }
    const handleCalculate = () => {
        try{
            const result = eval(input);
            setInput(Number.isFinite(result) ? result.toString() : 'Error');
        }catch(error) {
            setInput('Error');
        }
    }

    const layout = [
        [{imputValue: '7', style: styles.button, handler: handleInput},
         {imputValue: '8', style: styles.button, handler: handleInput},
         {imputValue: '9', style: styles.button, handler: handleInput},
         {imputValue: '/', displayText: '÷', style: styles.operatorButton, handler: handleInput},        
        ],
        [{imputValue: '4', style: styles.button, handler: handleInput},
         {imputValue: '5', style: styles.button, handler: handleInput},
         {imputValue: '6', style: styles.button, handler: handleInput},
         {imputValue: '*', displayText: '×', style: styles.operatorButton, handler: handleInput},        
        ],
        [{imputValue: '1', style: styles.button, handler: handleInput},
         {imputValue: '2', style: styles.button, handler: handleInput},
         {imputValue: '3', style: styles.button, handler: handleInput},
         {imputValue: '-', style: styles.operatorButton, handler: handleInput},        
        ],
        [{imputValue: '0', style: styles.button, handler: handleInput},
         {imputValue: '.', style: styles.button, handler: handleInput},
         {imputValue: 'C', style: styles.button, handler: handleInput},
         {imputValue: '+', style: styles.operatorButton, handler: handleInput},        
        ],
        [
            {imputValue: '=', style: styles.calculateButton, handler: handleCalculate},
        ]
    ]
    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline = {false} style={styles.input} editable={false}>
                    {input}
                </TextInput>
                </View>
                <View style={styles.buttonContainer}>
                    {layout.map(rows => (
                        <View style={styles.row}> 
                            {rows.map(row => (
                                <TouchableOpacity key={row.imputValue} style={row.style} 
                                onPress={() => row.handler(row.imputValue)}>
                                    <Text style={styles.buttonText}>
                                        {row?. displayText ? row.displayText : row.imputValue}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 3,
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#505050',
        flex: 1,
        padding: 16,
        borderRadius: 38,
        margin: 6
    },
    inputContainer: {
        height: 160,
        justifyContent: 'flex-end',

    }, input: {
        fontSize: 48,
        color: '#fff',
        textAlign: 'right'
    },
    container: {
        flex: 2,
        backgroundColor: '#000',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 40,
    },
    row: {
        flexDirection: 'row'
    },
    buttonText: {
        fontSize: 28,
        textAlign: 'center',
        color: '#fff'
    }, 
    calculateButton: {
        backgroundColor: '#FF9500',
        borderRadius: 38,
        padding: 16,
        width: '100%'
    },
    operatorButton: {
        backgroundColor: '#FF9500',
        flex: 1,
        padding: 16,
        borderRadius: 38,
        margin: 6,

    }
});
export default Calculator;