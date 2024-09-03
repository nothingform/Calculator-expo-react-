import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = () => setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
  const handleSubtract = () => setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
  const handleMultiply = () => setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
  const handleDivide = () => setResult(parseFloat(firstNumber) / parseFloat(secondNumber));
  const handleReset = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backButton}>Back</Text>
        <Text style={styles.title}>Calculator App</Text>
        <View style={styles.placeholder}></View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.underlinedWrapper}>
          <Text style={styles.label}>First Number:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={firstNumber}
            onChangeText={setFirstNumber}
            placeholder="Enter First Number"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.underlinedWrapper}>
          <Text style={styles.label}>Second Number:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={secondNumber}
            onChangeText={setSecondNumber}
            placeholder="Enter Second Number"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubtract}>
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleMultiply}>
          <Text style={styles.buttonText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDivide}>
          <Text style={styles.buttonText}>Divide</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultContainer}>
        <View style={styles.underlinedWrapper}>
          <Text style={styles.label}>Result:</Text>
          <Text style={styles.result}>{result !== null ? result.toFixed(2) : ''}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleReset}>
        <Text style={styles.resetButton}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    color: '#007AFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 50,
  },
  inputContainer: {
    marginBottom: 20,
  },
  underlinedWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5, // Adjust padding if needed
  },
  label: {
    color: '#333',
    fontSize: 16,
    marginRight: 10,
    width: 120, // Fixed width to align consistently
  },
  input: {
    borderBottomWidth: 0, // Remove individual underline
    paddingVertical: 0, // Remove default padding
    fontSize: 16,
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultContainer: {
    marginBottom: 20,
  },
  result: {
    borderBottomWidth: 0, // Remove individual underline
    paddingVertical: 0, // Remove default padding
    color: '#333',
    fontSize: 16,
    flex: 1,
  },
  resetButton: {
    color: '#007AFF',
    textAlign: 'center',
    fontSize: 16,
  },
});
