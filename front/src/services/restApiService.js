class RestApiService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async getAllAsync() {
        const response = await fetch(`${this.apiUrl}`);
        const data = await response.json();
        return data;
    }

    async getByIdAsync(id) {
        const response = await fetch(`${this.apiUrl}/${id}`);
        const data = await response.json();
        return data;
    }

    async createAsync(item) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });

        const data = await response.json();
        return data;
    }

    async updateAsync(id, updatedItem) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        });

        const data = await response.json();
        return data;
    }

    async deleteAsync(id) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'DELETE',
        });

        const data = await response.json();
        return data;
    }
}
export default RestApiService;