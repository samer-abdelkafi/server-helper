package io.devact.tools.server.hepler.controller;

import io.devact.tools.server.hepler.model.Event;
import io.devact.tools.server.hepler.model.FileDto;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.BaseStream;
import java.util.stream.Stream;

@Slf4j
@RestController
public class FileController {



    /**
     * Returns files and directories list.
     *
     * @param path String
     * @return ModelAndView
     */
    @GetMapping(value = "/files")
    public
    @ResponseBody
    List<FileDto> listeFiles(@RequestParam(required = false, defaultValue = "") String path) throws UnsupportedEncodingException {

        List<FileDto> files = new ArrayList<>();

        String serverPath = getPath();
        for (File f : new File(serverPath, path).listFiles()) {
            String relativePath = new File(serverPath).toURI().relativize(f.toURI()).getPath();
            files.add(new FileDto(f.getName(), FilenameUtils.normalizeNoEndSeparator(relativePath), f.length(),
                    f.isDirectory(), f.lastModified()));
        }
        return files;
    }

    @GetMapping(produces = MediaType.TEXT_EVENT_STREAM_VALUE, value = "/file/lines")
    private static Flux<String> fromPath(Path path) {
        return Flux.using(() -> Files.lines(path),
                Flux::fromStream,
                BaseStream::close
        );
    }


    @GetMapping("/events/{id}")
    Mono<Event> getEventById(@PathVariable long id) {
        return Mono.just(new Event(id, new Date(), ""));
    }


    @GetMapping(produces = MediaType.TEXT_EVENT_STREAM_VALUE, value = "/events")
    Flux<Event> getEvents() {
        Flux<Event> eventflux = Flux.fromStream(Stream.generate(() -> new Event(System.currentTimeMillis(), new Date(), "")));
        Flux<Long> durationFlux = Flux.interval(Duration.ofSeconds(1));

        return Flux.zip(eventflux, durationFlux).map(Tuple2::getT1);

    }



    public String getPath() throws UnsupportedEncodingException {
        String path = this.getClass().getClassLoader().getResource("").getPath();
        String fullPath = URLDecoder.decode(path, "UTF-8");
        String pathArr[] = fullPath.split("/WEB-INF/classes/");
        fullPath = pathArr[0];
        return new File(fullPath).getPath();
    }


}
