module.exports = {
    componentsRoot: "src/components",
    components: "**/*.vue",
    outDir: "docs",
    apiOptions: {
        validExtends: (fullFilePath) => {
            return (
                /[\\/]primevue[\\/]/.test(fullFilePath) ||
                !/[\\/]invalid_extend[\\/]/.test(fullFilePath) &&
                !/[\\/]node_modules[\\/]/.test(fullFilePath)
            );
        }
    }
}