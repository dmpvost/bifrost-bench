export type LanguageCode = "en" | "fr";

export type LangMessages = {
    [lang in LanguageCode]: string;
};

export type LocalizedMessage = {
    code: string;
    messages: LangMessages;
};

export type CodeM = string;

export class MessageTranslation {
    constructor(public code: CodeM, public translations: LangMessages) {
    }

    private toString() {
        return this.code.toString();
    }
}

export class MessageCodes {
    static readonly SUCCESS = new MessageTranslation("SUCCESS", {fr: "OK", en: "OK"});
    static readonly GLOBAL_INTERNAL_ERROR = new MessageTranslation("GLOBAL_INTERNAL_ERROR", {
        fr: "Erreur interne",
        en: "An internal server error occurred.",
    });
    static readonly BAD_FORMAT = new MessageTranslation("BAD_FORMAT", {
        fr: "Mauvais format de donnée",
        en: "Bad format of data",
    });
    static readonly JWT_ERROR = new MessageTranslation("JWT_ERROR", {
        fr: "Erreur d'authentification",
        en: "Authentication Error",
    });
    static readonly JWT_ACCESS_TOKEN_EXPIRE = new MessageTranslation("JWT_ACCESS_TOKEN_EXPIRE", {
        fr: "Votre session a expiré, veuillez vous reconnecter",
        en: "Your session has expired, please log in again",
    });
    static readonly JWT_REFRESH_TOKEN_EXPIRE = new MessageTranslation("JWT_REFRESH_TOKEN_EXPIRE", {
        fr: "Votre session a expiré, veuillez vous reconnecter",
        en: "Your session has expired, please log in again",
    });
    static readonly JWT_FORMAT = new MessageTranslation("JWT_FORMAT", {
        fr: "Mauvais format du token",
        en: "Bad token format",
    });
    static readonly JWT_UNAUTHORIZE = new MessageTranslation("JWT_UNAUTHORIZE", {
        fr: "Votre session a expiré, veuillez vous reconnecter",
        en: "Your session has expired, please log in again",
    });
    static readonly FORMAT_PHONE_NUMBER_ERROR = new MessageTranslation("FORMAT_PHONE_NUMBER_ERROR", {
        fr: "Format du numéro de téléphone incorrect",
        en: "Incorrect phone number format",
    });
    static readonly FORMAT_BAD_EMAIL_FORMAT = new MessageTranslation("FORMAT_BAD_EMAIL_FORMAT", {
        fr: "Format de l'email incorrect",
        en: "Bad email format",
    });
    static readonly FORMAT_BAD_UUID_FORMAT = new MessageTranslation("FORMAT_BAD_UUID_FORMAT", {
        fr: "Format de l'UUID invalide",
        en: "Invalid UUID format",
    });
    static readonly FORMAT_DATE_UNDEFINED = new MessageTranslation("FORMAT_DATE_UNDEFINED", {
        fr: "Date non définie",
        en: "Date is undefined",
    });
    static readonly FORMAT_BAD_DATE_FORMAT = new MessageTranslation("FORMAT_BAD_DATE_FORMAT", {
        fr: "Format de date incorrect",
        en: "Bad date format",
    });
    static readonly DATE_OUT_OF_RANGE_TOO_BIG = new MessageTranslation("DATE_OUT_OF_RANGE_TOO_BIG", {
        fr: "Date: date trop grande",
        en: "Date too big",
    });
    static readonly DATE_OUT_OF_RANGE_TOO_SMALL = new MessageTranslation("DATE_OUT_OF_RANGE_TOO_SMALL", {
        fr: "Date: date trop petite",
        en: "Date too small",
    });
    static readonly FORMAT_NUMBER_NOT_AN_INTEGER = new MessageTranslation("FORMAT_NUMBER_NOT_AN_INTEGER", {
        fr: "Le nombre n'est pas un entier",
        en: "Number is not an integer",
    });
    static readonly FORMAT_NUMBER_OUT_OF_RANGE = new MessageTranslation("FORMAT_NUMBER_OUT_OF_RANGE", {
        fr: "Nombre hors plage",
        en: "Number out of range",
    });
    static readonly FORMAT_INVALID_SIRET = new MessageTranslation("FORMAT_INVALID_SIRET", {
        fr: "Format de SIRET invalide",
        en: "Invalid SIRET format",
    });
    static readonly FORMAT_NAME_TOO_LONG = new MessageTranslation("FORMAT_NAME_TOO_LONG", {
        fr: "Le nom est trop long",
        en: "Name is too long",
    });
    static readonly FORMAT_NAME_TOO_SHORT = new MessageTranslation("FORMAT_NAME_TOO_SHORT", {
        fr: "Le nom est trop court",
        en: "Name is too short",
    });
    static readonly FORMAT_INVALID_NAME = new MessageTranslation("FORMAT_INVALID_NAME", {
        fr: "Nom invalide",
        en: "Invalid name",
    });
    static readonly FORMAT_STRING_TOO_LONG = new MessageTranslation("FORMAT_STRING_TOO_LONG", {
        fr: "La chaîne de caractères est trop longue",
        en: "String is too long",
    });
    static readonly FORMAT_STRING_TOO_SHORT = new MessageTranslation("FORMAT_STRING_TOO_SHORT", {
        fr: "La chaîne de caractères est trop courte",
        en: "String is too short",
    });
    static readonly FORMAT_MISSING_FIELD = new MessageTranslation("FORMAT_MISSING_FIELD", {
        fr: "Champ manquant",
        en: "Missing field",
    });
    static readonly FORMAT_INVALID_NUMBER = new MessageTranslation("FORMAT_INVALID_NUMBER", {
        fr: "Nombre invalide",
        en: "Invalid number",
    });
    static readonly FORMAT_INVALID_TIME = new MessageTranslation("FORMAT_INVALID_TIME", {
        fr: "Format de temps invalide",
        en: "Invalid time format",
    });

}


export enum Severity {
    FATAL = "FATAL",
    ERROR = "ERROR",
    WARNING = "WARNING",
    INFO = "INFO",
    DEBUG = "DEBUG"
}

export class LocalizeError extends Error {

    public code: CodeM;
    public message: string;
    public translations: LangMessages;
    public severity: Severity;

    constructor(
        codeError: MessageTranslation,
        message: string = "",
        severity: Severity = Severity.ERROR,
    ) {
        super(codeError?.code?.toString());
        this.code = codeError.code;
        this.translations = codeError.translations;
        if (!message) {
            message = this.translations.en;
        }
        this.message = codeError + ": " + message;
        this.severity = severity;
        Object.setPrototypeOf(this, LocalizeError.prototype);
    }

}
