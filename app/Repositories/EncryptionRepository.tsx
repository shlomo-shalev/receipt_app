// Tools
import CryptoJS from 'crypto-js';

class EncryptionRepository {
    static async encrypt({ data, key }: { data: Object, key: string }) : Promise<string>
    {
        const jsonString = JSON.stringify(data);
        
        const encryptedData = CryptoJS.AES.encrypt(jsonString, key);

        return `${encryptedData.toString()}`;
    }

    static async decrypt ({ text, key }) : Promise<string>
    {
        const decryptedData = CryptoJS.AES.decrypt(text, key);

        return `${decryptedData.toString(CryptoJS.enc.Utf8)}`;
    }
}

export default EncryptionRepository;