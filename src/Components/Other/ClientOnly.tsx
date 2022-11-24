import React from "react";

interface Props {
    children: React.ReactNode
}

const ClientOnly = ({ children, ...delegated }: Props) => {

    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null

    return (
        <React.Fragment {...delegated}>
            {children}
        </React.Fragment>
    );
}

export default ClientOnly