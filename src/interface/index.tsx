interface Button {
    ButtonClass? : string;
    title : string;
    onClick? : () => void;
}

interface GithubAuth {
    clientId: string;
    clientSecret: string;
}