import {Rule} from 'antd/lib/form';


export const validateEmail: Rule = () => ({
    validator(_: any, value: string) {
        return new Promise((resolve, reject) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value && emailRegex.test(value)) {
                // setError(errors.filter(err => err !=='email'))
                resolve('');
            }
            if (!value && !focus || !emailRegex.test(value) && !focus) {
                // !errors.includes('email') && setError([...errors, 'email'])
                reject(new Error(''))
            }

        });
    },
});
