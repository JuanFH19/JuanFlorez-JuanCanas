import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CotizacionForm = () => {
  const [fechaAgenda, setFechaAgenda] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [ccPersona, setCcPersona] = useState('');
  const [carroCotizar, setCarroCotizar] = useState('');
  const [precioCarro, setPrecioCarro] = useState('');

  const handleCotizacionSubmit = () => {

    console.log({
      fechaAgenda,
      nombre,
      apellido,
      ccPersona,
      carroCotizar,
      precioCarro,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Fecha de Agenda:</Text>
      <TextInput
        style={styles.input}
        value={fechaAgenda}
        onChangeText={setFechaAgenda}
      />
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />
      <Text style={styles.label}>Apellido:</Text>
      <TextInput
        style={styles.input}
        value={apellido}
        onChangeText={setApellido}
      />
      <Text style={styles.label}>Cédula:</Text>
      <TextInput
        style={styles.input}
        value={ccPersona}
        onChangeText={setCcPersona}
      />
      <Text style={styles.label}>Carro a cotizar:</Text>
      <TextInput
        style={styles.input}
        value={carroCotizar}
        onChangeText={setCarroCotizar}
      />
      <Text style={styles.label}>Precio del carro:</Text>
      <TextInput
        style={styles.input}
        value={precioCarro}
        onChangeText={setPrecioCarro}
        keyboardType="numeric"
      />
      <Button title="Enviar Cotización" onPress={handleCotizacionSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default CotizacionForm;