/**
 * Interface for link service
 */
interface ILinkService {
    /**
     * Upload file to store and return Promise with url
     * @param file
     * @return {Promise<String>}
     */
    upload(file: File): Promise<String>;
}

export default ILinkService;
