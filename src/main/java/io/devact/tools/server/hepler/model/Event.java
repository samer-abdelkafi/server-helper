package io.devact.tools.server.hepler.model;

import lombok.Data;

import java.util.Date;

@Data
public class Event {

    private long id;

    private Date date;

    private String value;

    public Event(long id, Date date, String value) {
        this.id = id;
        this.date = date;
        this.value = value;
    }


}
