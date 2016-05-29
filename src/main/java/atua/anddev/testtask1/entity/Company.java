package atua.anddev.testtask1.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Table(name = "COMPANIES")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @Column(name = "estimateEarnings")
    private Long estimateEarnings;

    @ManyToOne(cascade = {CascadeType.ALL})
    private Company parent;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "parent")
    private List<Company> children;

    @Column(name = "totalEarnings")
    private Long totalEarnings;

    /** Constructor for cloning **/
    public Company(Company toClone) {
        this.id = toClone.getId();
        this.name = toClone.getName();
        this.estimateEarnings = toClone.getEstimateEarnings();
        this.parent = toClone.getParent();
        this.children = toClone.getChildren();
        this.totalEarnings = toClone.getTotalEarnings();
    }

}
