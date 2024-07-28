import React, { useState, useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font, pdf } from '@react-pdf/renderer';

//Thêm font Time New Roman
Font.register({
    family: 'Times New Roman',
    src: '/assets/fonts/times.ttf'
});

// Style cho Thẻ bảo hành
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 20,
        marginTop: 40,
    },
    header: {
        fontSize: 18,
        textAlign: 'center',
        color: 'Green',
        marginBottom: 20,
        fontFamily: 'Times New Roman',
    },
    text: {
        fontSize: 12,
        marginBottom: 10,
        fontFamily: 'Times New Roman',
    },
    image: {
        width: '50%',
        height: 'auto',
        marginLeft: 60,
        marginBottom: 20,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderBottomStyle: 'solid',
        marginBottom: 5,
    }
});

const WarrantyDocument = ({ customerName, productName, warrantyFrom, warrantyTo }) => (
    <Document>
        <Page size="A6" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header}>THẺ BẢO HÀNH</Text>
                <Image src="assets/img/logo/logo.png" style={styles.image} />
                <View style={styles.line}>
                    <Text style={styles.text}>Tên khách hàng: {customerName}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.text}>Tên sản phẩm: {productName}</Text>
                </View>
                <View>
                    <Text style={styles.text}>Bảo hành từ: {warrantyFrom} </Text>
                </View>
                <View>
                    <Text style={styles.text}>Đến ngày: {warrantyTo}</Text>
                </View>
            </View>
        </Page>
    </Document>
);

const GenerateWarrantyPDF = ({ customerName, productName, warrantyFrom, warrantyTo }) => {
    const [pdfDocument, setPdfDocument] = useState(null);
    const [pdfUrl, setPdfUrl] = useState('');

    useEffect(() => {
        const createPDFDocument = async () => {
            const pdfDoc = (
                <WarrantyDocument
                    customerName={customerName}
                    productName={productName}
                    warrantyFrom={warrantyFrom}
                    warrantyTo={warrantyTo}
                />
            );
            const blob = await pdf(pdfDoc).toBlob();
            const url = URL.createObjectURL(blob);
            setPdfDocument(pdfDoc);
            setPdfUrl(url);
        };

        createPDFDocument();
    }, [customerName, productName, warrantyFrom, warrantyTo]);

    if (!pdfDocument) {
        return <div>Loading...</div>;
    }

    return (
        <a href={pdfUrl} className="btn btn-sqr-chitietdondang" target="_blank" rel="noopener noreferrer">
            Xem PDF
        </a>
    );
};

export default GenerateWarrantyPDF;
