import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';

export class UtilsService {
    /**
     * convert entity to dto class instance
     * @param {{new(entity: E, options: any): T}} model
     * @param {E[] | E} entity
     * @param options
     * @returns {T[] | T}
     */
    public static toDto<T, E>(
        model: new (entity: E, options?: any) => T,
        entity: E,
        options?: any,
    ): T;
    public static toDto<T, E>(
        model: new (entity: E, options?: any) => T,
        entity: E[],
        options?: any,
    ): T[];
    public static toDto<T, E>(
        model: new (entity: E, options?: any) => T,
        entity: E | E[],
        options?: any,
    ): T | T[] {
        if (_.isArray(entity)) {
            return entity.map((u) => new model(u, options));
        }

        return new model(entity, options);
    }

    /**
     * generate hash from password or string
     * @param {string} password
     * @returns {string}
     */
    static generateHash(password: string): string {
        return bcrypt.hashSync(password, 10);
    }

    /**
     * generate random string
     * @param length
     */
    static generateRandomString(length: number): string {
        return Math.random()
            .toString(36)
            .replace(/[^a-zA-Z0-9]+/g, '')
            .substr(0, length);
    }
    /**
     * validate text with hash
     * @param {string} password
     * @param {string} hash
     * @returns {Promise<boolean>}
     */
    static validateHash(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash || '');
    }

    /**
     * Searches for a given substring
     */
    public static contains(str: string, substring: string, fromIndex: number) {
      return str.indexOf(substring, fromIndex) !== -1;
    }

    /**
     * "Safer" String.toLowerCase()
     */
    public static lowerCase(str: string) {
      return str.toLowerCase();
    }

    /**
     * "Safer" String.toUpperCase()
     */
    public static upperCase(str: string) {
      return str.toUpperCase();
    }

    /**
     * UPPERCASE first char of each word.
     */
    public static properCase(str: string) {
      return this.lowerCase(str).replace(/^\w|\s\w/g, this.upperCase);
    }

    /**
     * UPPERCASE first char of each sentence and lowercase other chars.
     */
    public static sentenceCase(str: string) {
      // Replace first char of each sentence (new line or after '.\s+') to Uppercase
      return this.lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, this.upperCase);
    }

    /**
     * Generate random Int.
     */
    public static randomInt(min = 1000, max = 9999) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
