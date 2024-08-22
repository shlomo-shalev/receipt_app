// Tools
import CryptoJS from 'crypto-js';

class EncryptionRepository {
    static async encrypt({ data, key }: { data: Object, key: string }) : Promise<string>
    {
        const jsonString = JSON.stringify(data);

        const encryptedData = CryptoJS.AES.encrypt(jsonString, key);

        return `${encryptedData.toString()}`;
    }
}

export default EncryptionRepository;