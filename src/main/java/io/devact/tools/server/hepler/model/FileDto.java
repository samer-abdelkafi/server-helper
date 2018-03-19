package io.devact.tools.server.hepler.model;

import lombok.Data;

@Data
public class FileDto {

    private String name;

    private String path;

    private String size;

    private boolean isDirectory;

    private long lastModifDate;


    public FileDto(String name, String path, String size, boolean isDirectory, long lastModifDate) {
        this.name = name;
        this.path = path;
        this.size = size;
        this.isDirectory = isDirectory;
        this.lastModifDate = lastModifDate;
    }
}
