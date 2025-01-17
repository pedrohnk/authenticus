import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useQrCode } from '../store'

export default function QRCodeInfoScreen () {
  // Simulação de dados do QRCode lido
  const [qrCodeData, setQRCodeData] = useState({
    nome: '',
    ano: '',
    dataHora: '',
    quantidadeLida: 0,
    localizacao: ''
  })
  const qrcode = useQrCode((state) => state.qrcode)
  // Simulação de leitura do QRCode (substitua por sua lógica real de leitura)
  useEffect(() => {
    // Aqui você pode chamar uma função para ler o QRCode e obter os dados
    // Vamos simular alguns dados fixos para este exemplo
    const qrCodeInfo = {
      nome: 'QR Code 123',
      ano: '2024',
      dataHora: new Date().toLocaleString(),
      quantidadeLida: 5,
      localizacao: 'Local A'
    }
    setQRCodeData(qrCodeInfo)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o QrCode</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Nome do QR Code:</Text>
        <Text style={styles.info}>{qrcode}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Ano:</Text>
        <Text style={styles.info}>{qrCodeData.ano}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Data e Hora:</Text>
        <Text style={styles.info}>{qrCodeData.dataHora}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Quantidade de vezes lido:</Text>
        <Text style={styles.info}>{qrCodeData.quantidadeLida}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Localização:</Text>
        <Text style={styles.info}>{qrCodeData.localizacao}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6c13c3'
  },
  info: {
    fontSize: 16,
    color: '#000'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6c13c3'
  }
})
